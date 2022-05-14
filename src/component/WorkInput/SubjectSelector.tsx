import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Subject } from "../../store/subject";
import { EmptySubjectIcon } from "./EmptySubjectIcon";
import { SubjectIcon } from "../Subject/SubjectIcon";
import { SubjectList } from "../Subject/SubjectList";

export const SubjectSelector = () => {
    const [isExpand, setIsExpand] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(
        null
    );

    return (
        <div className="relative">
            {isExpand && (
                <div className="absolute bottom-16 w-56">
                    <SubjectList
                        onClickCard={(sub) => () => {
                            setIsExpand(false);
                            setSelectedSubject(sub);
                        }}
                    />
                </div>
            )}
            <div className="inline-block rounded-full border-2 py-2 px-4">
                <div
                    className="flex items-center gap-3"
                    onClick={() => setIsExpand((prev) => !prev)}
                >
                    <div className="font-medium">
                        {selectedSubject == null ? (
                            <div className="flex items-center space-x-4">
                                <div className="h-7 w-7">
                                    <EmptySubjectIcon />
                                </div>
                                <div>選択してください</div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <div className="h-7 w-7">
                                    <SubjectIcon
                                        colorCode={selectedSubject.colorCode}
                                    />
                                </div>
                                <div>{selectedSubject.name}</div>
                            </div>
                        )}
                    </div>

                    {isExpand ? (
                        <MdExpandLess size={28} />
                    ) : (
                        <MdExpandMore size={28} />
                    )}
                </div>
            </div>
        </div>
    );
};
