import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: 'Author role',
      type: 'string',
    }),
    defineField({
      name: 'authorImage',
      title: 'Author image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company logo',
      type: 'image',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'authorRole' },
  },
});