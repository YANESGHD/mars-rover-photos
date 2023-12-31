interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string
}

export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover
}

export interface Filters {
  earth_date?: string;
  sol?: string;
  camera?: string
}
