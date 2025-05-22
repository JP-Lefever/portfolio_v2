export type ProjectProps = {
    id: number;
    name: string;
    slug: string;
    image: string;
    type: string;
    status: string;
    synopsis: string;
    project:string;
    imageProject: string;
    ui?: string;
    imageUi?:string;
    admin?: string;
    imageAdmin?: string;
    imageAdmin1?: string;
    imageAdmin2?: string;
    techno: string[];
    web: string;
    git: string;

}

export type AboutProps = {
    title: string;
   parcours : string;
   parcoursText: string;
    lectureTitle: string;
    bookOne: string;
    bookTwo: string;
    bookThree: string;
    playlistTitle: string;
    playlistOne: string;
    playlistTwo: string;
    playlistThree: string;
    playlistFour: string;
    playlistFive: string;
    hobbieTitle: string;
    sport: string;
    games: string;
    travel: string;
}

export type ContactProps = {
    title: string;
    info: string;
    mail: string;
    tel: string;
    cv: string;
    download: string;
};