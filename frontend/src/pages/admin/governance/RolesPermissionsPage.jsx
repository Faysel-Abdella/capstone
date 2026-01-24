import React from "react";

const RolesPermissionsPage = () => {
  const roles = ["Admin", "Supervisor", "Operations", "Support"];
  const permissions = [
    "Queue Management",
    "Service Configuration",
    "Analytics Access",
    "Audit Logs",
    "Override Actions",
  ];

  const accessMatrix = {
    Admin: [true, true, true, true, true],
    Supervisor: [true, true, true, true, false],
    Operations: [true, false, true, false, false],
    Support: [false, false, true, false, false],
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Roles & Permissions</h2>
        <p className="mt-2 text-sm text-slate-500">
          Access policies are view-only in demo mode. This matrix reflects enterprise-grade governance
          for queue operations.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Permission
              </th>
              {roles.map((role) => (
                <th
                  key={role}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {role}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {permissions.map((permission, index) => (
              <tr key={permission} className="text-sm text-slate-700">
                <td className="px-4 py-4 font-semibold text-slate-900">{permission}</td>
                {roles.map((role) => (
                  <td key={`${role}-${permission}`} className="px-4 py-4">
                    {accessMatrix[role][index] ? "Granted" : "Restricted"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role policies would be enforced by auth middleware and stored in an IAM service. */}
    </div>
  );
};

export default RolesPermissionsPage;
