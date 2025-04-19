'use client';

import React, { useState } from 'react';
import { ClassGroup, Student } from '@/types';
import StudentItem from '@/components/StudentItem';

interface ClassDetailProps {
  classGroup: ClassGroup;
  onSaveAttendance: (updatedStudents: Student[]) => void;
}

const ClassDetail: React.FC<ClassDetailProps> = ({ 
  classGroup,
  onSaveAttendance
}) => {
  const [students, setStudents] = useState<Student[]>(classGroup.students);
  const [attendanceMode, setAttendanceMode] = useState(false);
  
  const handleToggleStudentPresence = (studentId: string) => {
    if (attendanceMode) {
      setStudents(prevStudents => 
        prevStudents.map(student => 
          student.id === studentId 
            ? { ...student, isPresent: !student.isPresent } 
            : student
        )
      );
    }
  };

  const handleStartAttendance = () => {
    // Initialiser tous les élèves comme absents
    setStudents(prevStudents => 
      prevStudents.map(student => ({ ...student, isPresent: false }))
    );
    setAttendanceMode(true);
  };

  const handleSaveAttendance = () => {
    onSaveAttendance(students);
    setAttendanceMode(false);
  };

  const handleCancelAttendance = () => {
    // Réinitialiser les statuts de présence
    setStudents(classGroup.students);
    setAttendanceMode(false);
  };

  const handleFaceRecognition = () => {
    // Simuler la reconnaissance faciale en marquant aléatoirement des élèves comme présents
    const updatedStudents = students.map(student => ({
      ...student,
      isPresent: Math.random() > 0.3 // 70% de chance d'être présent
    }));
    
    setStudents(updatedStudents);
    setAttendanceMode(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {attendanceMode ? (
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Mode Présence</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Présents: {students.filter(s => s.isPresent).length}
              </span>
              <span>
                Absents: {students.filter(s => !s.isPresent).length}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Liste des élèves</h2>
          </div>
        )}
        
        <div className="space-y-2">
          {students.map(student => (
            <StudentItem 
              key={student.id}
              student={student}
              showStatus={attendanceMode}
              onTogglePresence={handleToggleStudentPresence}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex gap-2 border-t pt-4">
        {attendanceMode ? (
          <>
            <button 
              className="flex-1 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
              onClick={handleCancelAttendance}
            >
              Annuler
            </button>
            <button 
              className="flex-1 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
              onClick={handleSaveAttendance}
            >
              Enregistrer
            </button>
          </>
        ) : (
          <>
            <button 
              className="flex-1 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
              onClick={handleStartAttendance}
            >
              Appel Manuel
            </button>
            <button 
              className="flex-1 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
              onClick={handleFaceRecognition}
            >
              Reconnaissance Faciale
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ClassDetail;
