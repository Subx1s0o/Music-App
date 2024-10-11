import { useSongsStore } from "@/hooks/useSongsStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "rizzui";
import TextInput from "./TextInput";
import { SongFormValues, songSchema } from "./schemes/add-form.schema";
export default function AddForm({ close }: { close: () => void }) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SongFormValues>({
    resolver: zodResolver(songSchema),
  });

  const { addSong } = useSongsStore();

  const onSubmit = async (data: SongFormValues) => {
    await addSong(data);
    close();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <TextInput control={control} name="title" label="Title" />
        <TextInput control={control} name="author" label="Author" />
      </div>
      <TextInput control={control} name="url" label="Link To Song" />

      <div className="flex justify-center mt-5">
        <Button
          variant="solid"
          type="submit"
          size="lg"
          className="bg-black text-white disabled:bg-slate-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Song"}
        </Button>
      </div>
    </form>
  );
}
