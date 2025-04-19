'use client';

import React from 'react';
import { Student } from '@/types';

interface StudentItemProps {
  student: Student;
  showStatus?: boolean;
  onTogglePresence?: (studentId: string) => void;
}

const StudentItem: React.FC<StudentItemProps> = ({ 
  student, 
  showStatus = false,
  onTogglePresence
}) => {
  const handleClick = () => {
    if (onTogglePresence) {
      onTogglePresence(student.id);
    }
  };

  return (
    <div 
      className={`flex flex-row p-3 bg-white rounded-lg mb-2 shadow-sm cursor-pointer
        ${showStatus && student.isPresent ? 'border-l-4 border-green-500' : ''}
        ${showStatus && !student.isPresent ? 'border-l-4 border-red-500' : ''}
        hover:bg-gray-50 transition-colors`}
      onClick={handleClick}
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
        <span className="text-gray-600 font-semibold">
          {student.firstName.charAt(0)}{student.lastName.charAt(0)}
        </span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-base font-medium text-gray-800">
          {student.firstName} {student.lastName}
        </h3>
        
        {showStatus && (
          <div className={`mt-1 px-2 py-0.5 text-xs font-medium rounded-full w-fit
            ${student.isPresent 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'}`}
          >
            {student.isPresent ? 'Présent' : 'Absent'}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentItem;
