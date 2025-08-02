import SideNav from "../sidenav.jsx";

function BackgroundDisplay() {
  return (
    <>
      <div className="bg-[url('/3.png')] bg-cover bg-center bg-fixed min-h-screen w-full">
        <SideNav />
      </div>
    </>
  );
}

export default BackgroundDisplay;
