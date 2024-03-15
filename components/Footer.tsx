export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-cream text-burgundy border-t border-burgundy px-4 py-2 w-full flex justify-evenly md:text-lg'>
      <span>© {currentYear} Ashley Morgan</span>
      <span>Deployed with Vercel</span>
    </footer>
  )
};