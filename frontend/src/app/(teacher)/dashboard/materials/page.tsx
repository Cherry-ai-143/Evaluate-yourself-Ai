'use client';

import { useState } from 'react';
import { MaterialsHeader } from '@/components/teacher/materials/materials-header';
import { MaterialsFilters } from '@/components/teacher/materials/materials-filters';
import { MaterialsList } from '@/components/teacher/materials/materials-list';
import { CreateMaterialDialog } from '@/components/teacher/materials/create-material-dialog';

export default function MaterialsPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <MaterialsHeader onCreateClick={() => setDialogOpen(true)} />
      <MaterialsFilters
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
      />
      <MaterialsList search={search} type={type} />
      <CreateMaterialDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}


