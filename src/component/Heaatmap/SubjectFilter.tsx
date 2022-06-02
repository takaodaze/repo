import { MdFilterAlt } from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { heatmapSubjectFilterSelector } from "../../store/HeatmapSubjectFilter";
import { userState } from "../../store/user";
import { ColorCode } from "../../util/ColorCode";
import { SubjectIcon } from "../Subject/SubjectIcon";

export const SubjectFilter = () => {
    const [filter, setFilter] = useRecoilState(heatmapSubjectFilterSelector);
    const { subjectList } = useRecoilValue(userState);
    return (
        <div className="inline-block">
            <div className="flex items-center rounded-lg px-2 dark:bg-slate-700">
                <MdFilterAlt />
                {filter != null && (
                    <div className="ml-2 h-3 w-3">
                        <SubjectIcon
                            colorCode={
                                subjectList.find((s) => s.id === filter)
                                    ?.colorCode ?? new ColorCode("#444")
                            }
                        />
                    </div>
                )}
                <select
                    value={filter ?? -1}
                    onChange={(e) => {
                        const int = parseInt(e.target.value);
                        if (int === -1) {
                            setFilter(null);
                        } else {
                            setFilter(int);
                        }
                    }}
                    className="p-2 outline-none dark:bg-slate-700"
                >
                    {subjectList.map((s) => (
                        <option
                            key={`heat_map_subject_filter_${s.id}`}
                            value={s.id}
                        >
                            {s.name}
                        </option>
                    ))}
                    <option value={-1}></option>
                </select>
            </div>
        </div>
    );
};
