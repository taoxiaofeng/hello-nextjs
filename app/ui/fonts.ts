/**
 * @desc Fonts 从 Google Fonts 中导入
 */
import { Inter, Lusitana } from 'next/font/google';

export const inter =  Inter({ subsets: ['latin']});

export const lusitana = Lusitana({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});