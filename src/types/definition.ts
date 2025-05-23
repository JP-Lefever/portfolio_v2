export type ProjectProps = {
    id: number;
    name: string;
    slug: string;
    image: string;
    filter:string;
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
   fullText: string;
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
    social: string;
    download: string;
};

export type TitlesProps = {
    project: string;
    projectDetail : string;
    ui: string;
    admin : string;
    techno : string;
    technoPage : string;
    filterButton : string;
    more: string;
    less : string;

}

export type TechProps = {
    id: number;
    label: string;
    image: string;
};

export type HeaderProps = {
    title: string;
    subTitle: string;
    exp: string;
};

export type NavProps = {
    id: number;
    name: string;
    link: string;
};

export type LanguageProps = {
    navbar: NavProps[];
    header : HeaderProps;
    technology: TechProps[];
    titles: TitlesProps;
    project: ProjectProps[];
    about: AboutProps;
    contact: ContactProps;
}