const Footer = () => {
  return (
    <section className="text-slate-300 max-container2 ml-0 mr-auto px-16 py-8">
      <p>
        Questions? Call{" "}
        <span className="underline cursor-pointer">000-800-919-1694</span>
      </p>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4  text-sm   mt-8">
        <li>FAQ</li>
        <li className="cursor-pointer underline">Help Center</li>
        <li className="cursor-pointer underline">Account</li>
        <li className="cursor-pointer underline">Media Centre</li>
        <li className="cursor-pointer underline">Investor Relations</li>
        <li className="cursor-pointer underline">Jobs</li>
        <li className="cursor-pointer underline">Way to Watch</li>
        <li className="cursor-pointer underline">Terms of Use</li>
        <li className="cursor-pointer underline">Privacy</li>
        <li className="cursor-pointer underline">Cookie Preference</li>
        <li className="cursor-pointer underline">Corporate Information</li>
        <li className="cursor-pointer underline">Contact us</li>
        <li className="cursor-pointer underline">Speed Test</li>
        <li className="cursor-pointer underline">Legal Notices</li>
        <li className="cursor-pointer underline">Only on Netflix</li>
      </ul>
    </section>
  );
};

export default Footer;
