import { ChangeEvent, FormEvent, useState } from "react";
import { Router, useHistory, useLocation, useRouteMatch } from "react-router";
import ContactList from "../../components/Contact/ContactList";
import { CustomButton } from "../../components/CustomButton";
import { Input } from "../../components/Form";
import { useGetContats } from "../../utils/hooks/contact";

const Home = () => {
  const location = useLocation();
  const route = useRouteMatch();
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  const [searchForm, setSearchForm] = useState("");
  const { data } = useGetContats({}, searchQuery);

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") history.push("/");

    setSearchForm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.push(`${route.url}?search=${searchForm}`);
  };
  return (
    <div className="max-w-7xl px-3 mx-auto">
      {/* Search */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full max-w-sm mx-auto mt-6"
      >
        <Input
          className="mr-4"
          name="search"
          onChange={handleChange}
          type="search"
          value={searchForm}
          placeholder="Search Contacts"
        />
        <CustomButton>Search</CustomButton>
      </form>

      <ContactList contacts={(data?.data as any)?.contacts || []} />
    </div>
  );
};

export default Home;