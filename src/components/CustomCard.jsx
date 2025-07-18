
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg  border-gray-200 text-gray-900 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};
