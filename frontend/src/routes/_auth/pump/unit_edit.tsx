import { createFileRoute } from '@tanstack/react-router'
import { UnitEdit } from '@/components/UnitEdit'

export const Route = createFileRoute('/_auth/pump/unit_edit')({
  component: UnitEdit
})