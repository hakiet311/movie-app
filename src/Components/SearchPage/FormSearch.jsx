import { Controller, useForm, useWatch } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function FormSearch({ setDataSearch }) {
  const [searchParams] = useSearchParams();
  const getMediaTypeFromParams = searchParams.get("mediaType");

  const { register, control, resetField, watch } = useForm({
    defaultValues: {
      mediaType: ["movie", "tv"].includes(getMediaTypeFromParams)
        ? getMediaTypeFromParams
        : "movie",
      genresID: [],
      ratingSelect: "0-100",
    },
  });

  const mediaType = useWatch({ name: "mediaType", control });
  useEffect(() => {
    resetField("genresID");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  const formValue = watch();
  useEffect(() => {
    setDataSearch(formValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValue)]);
  const { data } = useFetch(`/genre/${mediaType}/list`);

  return (
    <form className="p-4 bg-slate-700 rounded-xl shadow-sm shadow-slate-600">
      <div className="space-y-4">
        <div>
          <p className="font-bold">Media Type</p>
          <div className="*:last:ml-2">
            <input
              className="accent-red-700"
              type="radio"
              id="movie"
              {...register("mediaType")}
              value={"movie"}
            />
            <label htmlFor="movie">Movie</label>
          </div>
          <div className="*:last:ml-2">
            <input
              className="accent-red-700"
              type="radio"
              id="tv"
              {...register("mediaType")}
              value={"tv"}
            />
            <label htmlFor="tv">TV Show</label>
          </div>
        </div>
        <div>
          <p className="font-bold">Genres</p>
          <div className="*:px-2 *:py-1 *:border-1 *:rounded-md *:border-slate-400 flex flex-wrap gap-2 *:cursor-pointer">
            <Controller
              control={control}
              name="genresID"
              render={({ field: { onChange, value = [] } }) => {
                {
                  return (
                    <>
                      {(data?.genres || []).map((item) => (
                        <p
                          className={`${
                            value.includes(item.id)
                              ? "!bg-red-700 !border-red-700 text-white"
                              : ""
                          }`}
                          onClick={() => {
                            let newArr = [...value];
                            if (value.includes(item.id)) {
                              newArr = value.filter(
                                (value) => value !== item.id
                              );
                            } else {
                              newArr = [...value, item.id];
                            }
                            onChange(newArr);
                          }}
                          key={item.id}
                        >
                          {item.name}
                        </p>
                      ))}
                    </>
                  );
                }
              }}
            ></Controller>
          </div>
        </div>
        <div>
          <label className="font-bold" htmlFor="rating">
            Rating
          </label>
          <Controller
            control={control}
            name="ratingSelect"
            render={({ field: { onChange } }) => {
              return (
                <select
                  className="bg-slate-200 text-black px-2 py-1 rounded-md ml-3"
                  id="rating"
                  onChange={(e) => onChange(e)}
                >
                  <option value="0-100">All</option>
                  <option value="0-49">0-49</option>
                  <option value="50-69">50-69</option>
                  <option value="70-100">70-100</option>
                </select>
              );
            }}
          ></Controller>
        </div>
      </div>
    </form>
  );
}

export default FormSearch;
