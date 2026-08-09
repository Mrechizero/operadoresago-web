import {
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import type { SectorIconKey } from '@/lib/sectors-data'

const icons: Record<SectorIconKey, LucideIcon> = {
  restaurant: UtensilsCrossed,
  hotel: Hotel,
  commerce: Store,
  office: BriefcaseBusiness,
  industry: Factory,
  education: GraduationCap,
  multisite: Building2,
}

export default function SectorIcon({ icon, className }: { icon: SectorIconKey; className?: string }) {
  const Icon = icons[icon]
  return <Icon className={className} aria-hidden="true" />
}
