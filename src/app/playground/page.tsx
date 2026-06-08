"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Item = { id: string; label: string };

const initialItems: Item[] = [
  { id: "1", label: "Pong" },
  { id: "2", label: "Snake" },
  { id: "3", label: "Tetris" },
  { id: "4", label: "Breakout" },
  { id: "5", label: "Space Invaders" },
];

function SortableCard({ item }: { item: Item }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="select-none cursor-grab active:cursor-grabbing rounded-xl bg-zinc-800 border border-zinc-700 px-6 py-5 text-zinc-100 text-lg font-medium hover:border-amber-400 transition-colors"
    >
      {item.label}
    </div>
  );
}

export default function Playground() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((current) => {
      const oldIndex = current.findIndex((i) => i.id === active.id);
      const newIndex = current.findIndex((i) => i.id === over.id);
      return arrayMove(current, oldIndex, newIndex);
    });
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Drag to reorder</h1>
        <p className="text-zinc-400 mb-8">
          Grab any card and drop it where you want. Cards make space as you
          hover between them.
        </p>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <SortableCard key={item.id} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
}
