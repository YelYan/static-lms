import {
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CourseDialogProps {
  id: number;
  title: string;
  description: string;
  details: {
    overview: string;
    topics: string[];
    duration: string;
    level: string;
    projects: string[];
  };
}

const CourseDialog = ({
  title,
  description,
  details,
  id,
}: CourseDialogProps) => {
  const renderTopic = (topic: string, index: number) => {
    // Check if the topic is a section title (no bullet point)
    if (!topic.startsWith("•") && topic !== "") {
      return (
        <li key={index} className="mt-4 mb-2">
          <span className="text-lg font-semibold text-primary">{topic}</span>
        </li>
      );
    }

    // Check if it's an empty line (spacing)
    if (topic === "") {
      return <li key={index} className="h-3" />; // Empty space
    }

    // Regular bullet point
    return (
      <li key={index} className="flex items-start ml-4">
        <span className="text-gray-700">{topic}</span>
      </li>
    );
  };

  return (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-telegraf-bold text-primary">
          {title}
        </DialogTitle>
        {id === 3 && (
          <DialogDescription className="font-telegraf-bold">
            Prerequisite: Completion of Modules 1-3
          </DialogDescription>
        )}
      </DialogHeader>

      <div className="space-y-6 font-telegraf-regular">
        {/* Course Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Course Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-gray-700">{details.overview}</p>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <p className="text-gray-700">{details.duration}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Level</h3>
            <p className="text-gray-700">{details.level}</p>
          </div>
        </div>

        {/* Topics Covered */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Curriculum</h3>
          <ul className="space-y-1">
            {details.topics.map((topic, index) => renderTopic(topic, index))}
          </ul>
        </div>

        {/* Projects */}
        {id === 2 || id === 4 ? (
          <></>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">Hands-on Projects</h3>
            <ul className="space-y-1">
              {details.projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="button"
            size={"sm"}
            className="cursor-pointer border border-primary hover:bg-transparent hover:text-primary rounded-3xl"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default CourseDialog;
