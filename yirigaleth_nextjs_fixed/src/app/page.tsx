import Image from 'next/image';
import Link from 'next/link';
import ClassItem from '@/components/ClassItem';
import { mockClasses } from '@/data/mockData';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-indigo-700 text-white p-6">
        <h1 className="text-2xl font-bold">Yirigaleth</h1>
        <p className="text-indigo-200">Gestion de présence</p>
      </header>
      
      <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Mes Classes</h2>
          <Link 
            href="/add-class"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            + Ajouter
          </Link>
        </div>
        
        <div className="space-y-3">
          {mockClasses.map(classGroup => (
            <ClassItem key={classGroup.id} classGroup={classGroup} />
          ))}
        </div>
      </div>
    </main>
  );
}
