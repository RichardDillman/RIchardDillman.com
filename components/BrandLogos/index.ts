import React from 'react';
import { Vogue } from './Vogue';
import { Wired } from './Wired';
import { Gq } from './Gq';
import { VanityFair } from './VanityFair';
import { TheNewYorker } from './TheNewYorker';
import { TheMuse } from './TheMuse';
import { TalentDotCom } from './TalentDotCom';

export const SVG_COMPONENTS: Record<string, React.ComponentType<{ className?: string }>> = {
  Vogue,
  Wired,
  Gq,
  VanityFair,
  TheNewYorker,
  TheMuse,
  TalentDotCom,
};
