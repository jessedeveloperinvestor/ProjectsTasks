import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll({
      atributes: ["id", "name", "priority", "description"],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProject(req, res) {
  const { name, priority, description } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
      },
      {
        fields: ["name", "priority", "description"],
      }
    );
    return res.json(newProject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        projectid: id,
      },
    });
    await Project.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getProjectTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectid", "name", "done"],
      where: { projectid: id },
    });
    res.json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
