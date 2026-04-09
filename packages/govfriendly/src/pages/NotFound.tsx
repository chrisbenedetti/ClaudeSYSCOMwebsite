import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading font-bold text-8xl text-navy mb-4">404</p>
        <h1 className="font-heading font-bold text-2xl text-navy mb-3">
          Page not found
        </h1>
        <p className="text-slate mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
