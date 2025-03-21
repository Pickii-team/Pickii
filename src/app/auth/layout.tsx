export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='flex h-full flex-col px-16 pb-40 pt-54'>{children}</div>
  );
};

export default AuthLayout;
