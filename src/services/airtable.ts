import Airtable from 'airtable'
import type { AirtableBase } from 'airtable/lib/airtable_base'

export const getAirtable = (): AirtableBase => {
  return new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE as string)
}
