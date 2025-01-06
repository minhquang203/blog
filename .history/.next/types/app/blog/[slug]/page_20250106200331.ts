import type { ResolvingMetadata, ResolvingViewport } from 'next/dist/lib/metadata/types/metadata-interface.js';
import * as entry from '../../../../../app/blog/[slug]/page.js';

type TEntry = typeof import('../../../../../app/blog/[slug]/page.js');

type SegmentParams<T extends Record<string, any> = any> = {
  [K in keyof T]: T[K] extends string ? string | string[] : never;
};

// Utility types
type Diff<Base, T extends Base, Message extends string = ''> = Omit<T, keyof Base>;
type FirstArg<T extends Function> = T extends (...args: [infer T, any]) => any ? T : never;
type SecondArg<T extends Function> = T extends (...args: [any, infer T]) => any ? T : never;
type MaybeField<T, K extends string> = T extends { [k in K]: infer G } ? G : never;
type RevalidateRange<T> = T extends { revalidate: infer R } ? R : never;

type Numeric = number | bigint;
type Zero = 0 | 0n;
type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never;
type NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : never;

function checkFields<_ extends Record<string, never>>() {}

// Kiểm tra xem entry.default có phải là một hàm không
if (typeof entry.default === 'function') {
  checkFields<Diff<PageProps, FirstArg<typeof entry.default>, 'default'>>();
}

// Check the arguments and return type of the generateMetadata function
if ('generateMetadata' in entry) {
  checkFields<Diff<PageProps, FirstArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>();
  checkFields<Diff<ResolvingMetadata, SecondArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>();
}

// Check the arguments and return type of the generateViewport function
if ('generateViewport' in entry) {
  checkFields<Diff<PageProps, FirstArg<MaybeField<TEntry, 'generateViewport'>>, 'generateViewport'>>();
  checkFields<Diff<ResolvingViewport, SecondArg<MaybeField<TEntry, 'generateViewport'>>, 'generateViewport'>>();
}

// Check the arguments and return type of the generateStaticParams function
if ('generateStaticParams' in entry) {
  checkFields<Diff<{ params: SegmentParams }, FirstArg<MaybeField<TEntry, 'generateStaticParams'>>, 'generateStaticParams'>>();
  checkFields<Diff<{ __tag__: 'generateStaticParams', __return_type__: any[] | Promise<any[]> }, { __tag__: 'generateStaticParams', __return_type__: ReturnType<MaybeField<TEntry, 'generateStaticParams'>> }>>();
}

export interface PageProps {
  params?: Record<string, string | string[]>;
  searchParams?: Record<string, string | string[]>;
}

export interface LayoutProps {
  children?: React.ReactNode;
  params?: Record<string, string | string[]>;
}