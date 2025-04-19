'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddClassPage() {
  const [className, setClassName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!className.trim()) {
      setError('Veuillez entrer un nom de classe');
      return;
    }
    
    // Dans une application réelle, nous sauvegarderions les données dans une base de données
    // Pour cette démo, nous simulons simplement un succès et retournons à l'accueil
    
    // Rediriger vers la page d'accueil
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-indigo-700 text-white p-6">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="text-indigo-200 hover:text-white mb-2 inline-block">
            ← Retour
          </Link>
          <h1 className="text-2xl font-bold">Ajouter une classe</h1>
        </div>
      </header>
      
      <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="className" className="block text-gray-700 font-medium mb-2">
              Nom de la classe *
            </label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="Ex: Terminale A"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
