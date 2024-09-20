interface ShimmerCardProps {
    id?: string;
    jobTitle?: string;
    emailAddress?: string;
    fullName?: string;
    email?: string;
    phone?: string;
    company?: string;
}
const ShimmerCard: React.FC<ShimmerCardProps> = ({
  id,
  jobTitle,
  emailAddress,
  fullName,
  email,
  phone,
  company,
}) => {
  return (
    <div className="shimmer-card w-[300px] m-2 h-[300px] bg-white shadow-lg rounded-lg">
      <div className="px-6 py-4">
        <h2 className="animate-pulse text-transparent bg-slate-400 text-xl font-semibold text-gray-800 mb-2 w-32">{fullName ?? 'John'}</h2>
        <p className="animate-pulse text-transparent bg-slate-400 text-gray-600 mb-1">
          <span className="font-semibold">Job Title:</span> {jobTitle ?? 'Developer'}
        </p>
        <p className="animate-pulse text-transparent bg-slate-400 text-gray-600 mb-1">
          <span className="font-semibold">Company:</span> {company ?? 'ABC Company'}
        </p>
        <p className="animate-pulse text-transparent bg-slate-400 text-gray-600 mb-1 text-wrap">
          <span className="font-semibold">Email:</span> {email ?? 'hi.john@gmail.com'}
        </p>
        <p className="animate-pulse text-transparent bg-slate-400 text-gray-600 mb-1">
          <span className="font-semibold">Phone:</span> {phone ?? '+9197752652'}
        </p>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t">
        <p className="mb-2 w-16 animate-pulse text-transparent bg-slate-400 text-gray-500 text-xs">User ID: {id ?? '12'}</p>
        <p className="w-44 animate-pulse text-transparent bg-slate-400 text-gray-500 text-xs">Business Email: {emailAddress ?? 'john.biz@company.com'}</p>
      </div>
    </div>
  );
};

export default ShimmerCard;
