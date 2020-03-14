export class nearEarthOrbit {
    links: link;
    id: number;
    neo_reference_id: number;
    name: string;
    designation: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: diameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: approachData[] = [];
    orbital_data: orbital;
    is_sentry_object: boolean;
}
export class nearEarthOrbitChild {
    links: link;
    id: number;
    neo_reference_id: number;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: diameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: approachData[] = [];
    orbital_data: orbital;
    is_sentry_object: boolean;
}
export class nearEarthOrbitDate {
    links: linkDate;
    element_count: number;
    near_earth_objects: neoDate;
}
export class approachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: relVelocity;
    miss_distance: missDis;
    orbiting_body: string;
}
export class relVelocity {
    kilometers_per_second: number;
    kilometers_per_hour: number;
    miles_per_hour: number;
}
export class missDis {
    astronomical: number;
    lunar: number;
    kilometers: number;
    miles: number;
}
export class link {
    self: string;
}
export class linkDate {
    next: string;
    prev: string;
    self: string;
}
export class diameter {
    kilometers: estDiameter;
    meters: estDiameter;
    miles: estDiameter;
    feet: estDiameter;
}
export class estDiameter {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}
export class orbital {
    orbit_id: number;
    orbit_determination_date: string;
    first_observation_date: string;
    last_observation_date: string;
    data_arc_in_days: number;
    observations_used: number;
    orbit_uncertainty: number;
    minimum_orbit_intersection: number;
    jupiter_tisserand_invariant: number;
    epoch_osculation: number;
    eccentricity: number;
    semi_major_axis: number;
    inclination: number;
    ascending_node_longitude: number;
    orbital_period: number;
    perihelion_distance: number;
    perihelion_argument: number;
    aphelion_distance: number;
    perihelion_time: number;
    mean_anomaly: number;
    mean_motion: number;
    equinox: string;
    orbit_class: orbitclass;
}
export class orbitclass {
    orbit_class_type: string;
    orbit_class_description: string;
    orbit_class_range: string;
}
export class neoDate {
    foobar: nearEarthOrbitChild[] = [];
}