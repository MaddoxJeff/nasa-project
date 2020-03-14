export class CuriosityRover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Cameras[] = [];

}

export class Cameras {
    name: string;
    full_name: string;
    
}

export class Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export class Photos {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: CuriosityRover;

}

export class CuriosityModel {
    photos: Photos[] = [];
}

