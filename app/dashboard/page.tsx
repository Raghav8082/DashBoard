import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
 
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className={`${lusitana.className} mb-6 text-3xl font-semibold`}>
          Dashboard
        </h1>
        <RevenueChart revenue={revenue} />
      </div>
    </main>
  );
}