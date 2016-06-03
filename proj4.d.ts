// Type definitions for proj4 2.3.x
// Project: http://proj4js.org/
// Definitions by: Emil Goude <https://github.com/Stockholmsnovis>

interface Proj4Point {
    x: number,
    y: number;
}

interface Proj4Static {

    /**
     * Transforms specified coordinates from one coordinate system to another.
     *
     * @param fromProjection A string containing the projection definition to transform from (or a named projection is such projection exists in proj4.defs(...)), see http://spatialreference.org/ref/ for examples. Projection can be a proj or a wkt string.
     * @param toProjection A string containing the projection definition  to transform to (or a named projection is such projection exists in proj4.defs(...)), see http://spatialreference.org/ref/ for examples. Projection can be a proj or a wkt string.
     * @param point the coordinates to transform (using the coordinate system of the fromProjection).
    */
    (fromProjection: string, toProjection: string, point: Proj4Point): Proj4Point;

    /**
     * Transforms specified coordinates from WGS84 coordinates system to another coordinate system.
     *
     * @param toProjection A string containing the projection definition  to transform to (or a named projection is such projection exists in proj4.defs(...)), see http://spatialreference.org/ref/ for examples of projection strings.  Projection can be a proj or a wkt string.
     * @param point the coordinates to transform (using the coordinate system of the fromProjection).
    */
    (toProjection: string, point: Proj4Point): Proj4Point;

    /**
     * Defines a named projection in proj4. Once a projection is defined using this method, you may use the proj4(...) method(s) with the projection name instead of the full projection string, , see http://spatialreference.org/ref/ for examples on projection strings.
     * @param projectionName 
     * @param projectionString 
     */
    defs(projectionName: string, projectionString:string):void;

    /**
     * Returns the projection (if any) in proj4.
     * @param projectionName 
     */
    defs(projectionName: string): string;

}

declare module "proj4" {
    export = proj4;
}

declare var proj4: Proj4Static;