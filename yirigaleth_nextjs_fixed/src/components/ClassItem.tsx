'use client';

import React from 'react';
import { ClassGroup } from '@/types';
import Link from 'next/link';

interface ClassItemProps {
  classGroup: ClassGroup;
}

const ClassItem: React.FC<ClassItemProps> = ({ classGroup }) => {
  return (
    <Link href={`/classes/${classGroup.id}`} className="block">
      <div className="flex flex-row bg-white rounded-lg mb-3 p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{classGroup.name}</h3>
          <p className="text-sm text-gray-600">
            {classGroup.students.length} élèves
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl text-gray-400">›</span>
        </div>
      </div>
    </Link>
  );
};

export default ClassItem;
