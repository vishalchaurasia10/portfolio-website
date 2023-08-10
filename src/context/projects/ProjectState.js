import { useState } from "react";
import ProjectContext from "./projectContext";
import { Client, Databases } from "appwrite";
import { toast } from "react-hot-toast";

const ProjectState = (props) => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const databases = new Databases(client);

            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID,
            );

            setProjects(result.documents);

            console.log(result);
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <ProjectContext.Provider value={{ projects, fetchProjects }}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;