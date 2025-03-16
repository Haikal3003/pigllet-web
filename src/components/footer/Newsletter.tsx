export default function Newsletter() {
  return (
    <div className="flex justify-between items-center border-b border-b-slate-300 pb-14 px-36">
      <div className="max-w-xs">
        <h1 className="font-bold text-lg">Join our newsletter to stay up to date on features and release.</h1>
      </div>
      <div className="flex items-center space-x-2">
        <input type="email" name="newsletter" id="newsletter" placeholder="Enter your email..." className=" w-xs p-3 rounded-full border border-slate-300 text-xs " />
        <button className="text-xs py-3 px-4 bg-red-300 rounded-full font-semibold">Subscribe</button>
      </div>
    </div>
  );
}
