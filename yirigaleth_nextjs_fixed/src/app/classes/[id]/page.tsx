'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ClassDetail from '@/components/ClassDetail';
import { getClassById } from '@/data/mockData';
import { Student } from '@/types';

export default function ClassPage() {
  const params = useParams();
  const classId = params.id as string;
  const [classData, setClassData] = useState(getClassById(classId));
  const [successMessage, setSuccessMessage] = useState('');

  if (!classData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Classe non trouvée</h1>
        <Link href="/" className="text-indigo-600 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const handleSaveAttendance = (updatedStudents: Student[]) => {
    // Dans une application réelle, nous sauvegarderions les données dans une base de données
    const presentCount = updatedStudents.filter(s => s.isPresent).length;
    const absentCount = updatedStudents.length - presentCount;
    
    setSuccessMessage(`Présence enregistrée avec succès. Présents: ${presentCount}, Absents: ${absentCount}`);
    
    // Masquer le message après 3 secondes
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-indigo-700 text-white p-6">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="text-indigo-200 hover:text-white mb-2 inline-block">
            ← Retour
          </Link>
          <h1 className="text-2xl font-bold">{classData.name}</h1>
          <p className="text-indigo-200">{classData.students.length} élèves</p>
        </div>
      </header>
      
      <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        
        <ClassDetail 
          classGroup={classData} 
          onSaveAttendance={handleSaveAttendance}
        />
      </div>
    </main>
  );
}
