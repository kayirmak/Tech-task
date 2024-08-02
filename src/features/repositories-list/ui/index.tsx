function RepositoriesList() {
  return (
    <div>
      <h2 className="text-[32px] font-semibold mb-7">Repositories (249)</h2>
      <div className="flex flex-col gap-y-6">
        <div className="w-[877px] h-28 rounded-md py-6 pl-8 bg-[#FFF]">
          <h3 className="text-[#0064EB] leading-7 text-2xl font-medium">
            react-hot-loader
          </h3>
          <p className="mt-4 leading-5">
            Tweak React components in real time. (Deprecated: use Fast Refresh
            instead.)
          </p>
        </div>

        <div className="w-[877px] h-28 rounded-md py-6 pl-8 bg-[#FFF]">
          <h3 className="text-[#0064EB] leading-7 text-2xl font-medium">
            overreacted.io
          </h3>
          <p className="mt-4 leading-5">Personal blog by Dan Abramov.</p>
        </div>

        <div className="w-[877px] h-28 rounded-md py-6 pl-8 bg-[#FFF]">
          <h3 className="text-[#0064EB] leading-7 text-2xl font-medium">
            whatthefuck.is
          </h3>
          <p className="mt-4 leading-5">
            An opinionated glossary of computer science terms for front-end
            developers. Written by Dan Abramov.
          </p>
        </div>

        <div className="w-[877px] h-28 rounded-md py-6 pl-8 bg-[#FFF]">
          <h3 className="text-[#0064EB] leading-7 text-2xl font-medium">
            react-deep-force-update
          </h3>
          <p className="mt-4 leading-5">react-deep-force-update</p>
        </div>
      </div>
    </div>
  );
}

export default RepositoriesList;
