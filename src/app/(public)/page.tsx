import { SignForm } from './_components/signin.form';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-center bg-slate-200'>
      <div className='mx-auto w-full max-w-sm'>
        <SignForm />
      </div>
    </main>
  );
}
