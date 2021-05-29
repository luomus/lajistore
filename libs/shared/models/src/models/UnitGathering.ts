/* tslint:disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the command to regenerate this file.
 */

export type GeoJSONGeometry =
  | GeoJSONPoint
  | GeoJSONLineString
  | GeoJSONPolygon
  | GeoJSONMultiPoint
  | GeoJSONMultiLineString
  | GeoJSONMultiPolygon;

export interface UnitGathering {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  dateBegin?: string;
  dateEnd?: string;
  geometry?: GeoJSONGeometry | GeoJSONGeometryCollection | {};
  /**
   * Informal description of the habitat.
   */
  habitatDescription?: string;
  habitatIUCN?: string;
  /**
   * Type of substrate or name of substrate species.
   */
  substrate?: string;
}
export interface GeoJSONPoint {
  type: "Point";
  coordinates: [number, number, ...number[]];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONLineString {
  type: "LineString";
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPolygon {
  type: "Polygon";
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPoint {
  type: "MultiPoint";
  coordinates: [number, number, ...number[]][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString {
  type: "MultiLineString";
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon {
  type: "MultiPolygon";
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONGeometryCollection {
  type: "GeometryCollection";
  geometries: (
    | GeoJSONPoint1
    | GeoJSONLineString1
    | GeoJSONPolygon1
    | GeoJSONMultiPoint1
    | GeoJSONMultiLineString1
    | GeoJSONMultiPolygon1
  )[];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint1 {
  type: "Point";
  coordinates: [number, number, ...number[]];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONLineString1 {
  type: "LineString";
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPolygon1 {
  type: "Polygon";
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPoint1 {
  type: "MultiPoint";
  coordinates: [number, number, ...number[]][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString1 {
  type: "MultiLineString";
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon1 {
  type: "MultiPolygon";
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][][];
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
