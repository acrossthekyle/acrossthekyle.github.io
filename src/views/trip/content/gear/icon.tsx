import {
  Asterisk,
  Backpack,
  Bed,
  Bubbles,
  Croissant,
  Cross,
  DiamondPlus,
  Droplets,
  Shirt,
  Sparkles,
  Tent,
  Zap,
} from 'lucide-react';

type Props = {
  category: string;
  className: string;
};

export default function Icon({ category, className }: Props) {
  switch (category.toLowerCase()) {
    case 'all':
      return <Asterisk className={className} />;
    case 'pack':
      return <Backpack className={className} />;
    case 'shelter':
      return <Tent className={className} />;
    case 'sleeping':
      return <Bed className={className} />;
    case 'clothing':
      return <Shirt className={className} />;
    case 'water':
      return <Droplets className={className} />;
    case 'hygiene':
      return <Bubbles className={className} />;
    case 'aid kit':
      return <Cross className={className} />;
    case 'electronics':
      return <Zap className={className} />;
    case 'packed food + water':
      return <Croissant className={className} />;
    case 'luxury items':
      return <Sparkles className={className} />;
    default:
      return <DiamondPlus className={className} />;
  }
}
