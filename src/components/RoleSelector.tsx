import React from 'react';

interface Role {
  label: string;
  value: string;
}

interface RoleSelectorProps {
  formData: {
    department: string;
  };
  setFormData: (data: any) => void;
}

const roles: Role[] = [
  { label: "Sales Manager", value: "sales" },
  { label: "Super admin", value: "super_admin" },
  { label: "Admin", value: "admin" },
  { label: "Marketing Manager", value: "marketing" },
  { label: "Customer Support", value: "support" },
  { label: "Data Analyst", value: "data_analyst" },
  { label: "Others", value: "other" },
];

const RoleSelector: React.FC<RoleSelectorProps> = ({ formData, setFormData }) => {
  const handleRoleSelect = (value: string): void => {
    setFormData((prev: any) => ({ ...prev, department: value }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {roles.map((role) => (
          <button
            key={role.value}
            type="button"
            onClick={() => handleRoleSelect(role.value)}
            className={`border-2 rounded-lg px-4 py-3 text-sm sm:text-base transition-all duration-200 ${
              formData.department === role.value
                ? "border-blue-500 bg-blue-50 text-blue-600 font-medium"
                : "border-slate-200 bg-white hover:border-blue-400"
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 text-blue-500 rounded hover:underline">
          ← Back
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
