import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur explicabo consectetur molestias necessitatibus quasi minima totam eum ducimus harum labore quam in incidunt suscipit, excepturi nesciunt, reprehenderit voluptatum soluta officiis? Eos quo quaerat ad laudantium dolorem magnam saepe corrupti recusandae ullam perferendis, dolore molestiae officiis non sunt velit a animi sint delectus fuga ea similique aspernatur fugiat! Quae, iusto! Quas molestiae voluptatum inventore, harum ducimus sunt voluptatem perferendis odio ratione quibusdam? Placeat repellat ratione nobis sequi quo corrupti ipsam facere unde ipsum deserunt laudantium provident non amet temporibus accusantium, dolorem nihil repellendus obcaecati modi dolorum? Quia minima nihil pariatur.
          </p>
          sssss
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam nihil vero, quas rerum quos possimus dolorem vitae recusandae sequi fugiat voluptas blanditiis! Molestiae, dolore incidunt! Officia veritatis porro adipisci quia ad praesentium nemo qui iure nisi magni nostrum, itaque quis quidem totam officiis beatae? Earum ipsa velit laboriosam nostrum iure explicabo aspernatur, laborum asperiores, debitis illum fugiat doloribus ut aliquid porro delectus adipisci sed, voluptas fuga dolorum. Accusamus distinctio modi asperiores eveniet autem expedita, fugit nihil, praesentium quo laboriosam porro consequuntur quod voluptas cupiditate non ipsa labore tempora! Repellat veritatis consequatur corporis enim nesciunt. Aperiam corporis nam officiis iste.</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
