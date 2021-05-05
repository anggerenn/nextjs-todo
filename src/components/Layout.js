import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-screen h-screen text-gray-900 bg-bluegray-100">
        <div className="pt-12 mx-auto ">
          <Nav />
          <div className="mt-10">
            <div className="flex flex-col px-4 pt-4 pb-8 bg-white rounded-lg shadow-xl w-28r item-center h-96">
              <main className="h-full">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
