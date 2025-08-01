function SideNav() {
  return (
    <>
      <div className="absolute bg-gray-300 w-1/3 my-1 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-row space-x-3 mx-1 my-1">
          <button className="w-1/4 bg-green-900">.</button>
          <button className="w-1/5 bg-black">.</button>
          <button className="w-1/5 bg-black">.</button>
          <button className="w-1/5 bg-black">.</button>
        </div>
      </div>
    </>
  );
}
export default SideNav;
