import loading from "../assets/loading.gif";

export const LoaderScreen = () => (
  <div className="flex items-center justify-center h-screen bg-gray-900">
    <img src={loading} className="w-20" alt="loader" />
  </div>
);

export const LoaderSmall = () => (
  <div className="h-50 flex items-center justify-center bg-gray-900">
    <img src={loading} className="w-20" alt="loader" />
  </div>
);
