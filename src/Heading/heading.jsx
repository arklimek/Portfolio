import SideNav from "/src/sidenav.jsx";

function BackgroundDisplay() {
  return (
    <>
      <div className="bg-[url('/2.png')] bg-cover bg-center bg-fixed min-h-screen w-full">
        <SideNav />
      </div>
    </>
  );
}

export default BackgroundDisplay;
