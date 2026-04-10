import type { GlobalConfig } from 'payload'

export const SystemStatus: GlobalConfig = {
  slug: 'system-status',
  label: 'Status do Sistema',
  fields: [
    { name: 'logMessage', type: 'text', required: true },
    { name: 'currentFocus', type: 'text' },
    { name: 'isAvailable', type: 'checkbox', defaultValue: true },
    { name: 'lastPing', type: 'date', defaultValue: () => new Date() },
  ],
}
