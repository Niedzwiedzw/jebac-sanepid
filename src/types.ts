export interface SanepidEntryRaw {
  name: string,
  per_30_days: number,
  measured: string,
}

export type SanepidResponse = SanepidEntryRaw[];
