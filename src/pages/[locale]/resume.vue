<script setup lang="ts">
import type { Project } from '~/types'

useHead({
  title: () => 'Resume',
})

definePage({
  name: 'resume',
})

const { t, tm, rt } = useI18n()
const { currentLocale } = useLocale()

interface ProjectInfo {
  title: string
  description: string
}
interface ProjectOtherInfo {
  year: number
  liveUrl?: string
}
const projectConstant = {
  'personal-website': {
    year: 2026,
    liveUrl: 'sikhlas.com',
  },

  'stage-two': {
    year: 2026,
    liveUrl: 'stage-two.sikhlas.com',
  },

  'sim-web': {
    year: 2025,
    liveUrl: 'sim.stembayo.sch.id',
  },
} satisfies Record<Project, ProjectOtherInfo>

const hardSkillConstant = computed(() => ({
  'frontend': [
    'Vue 3',
    'React',
    'NuxtJS',
    'NextJS',
    'Typescript',
    'TailwindCSS',
  ],

  'backend': [
    'Laravel',
    'Express',
    'Prisma ORM',
    'Sqlite',
    'MySQL',
    'MongoDB',
  ],

  'otherProgramming': ['Python', 'Bash', 'Powershell'],

  'linux': currentLocale.value === 'en'
    ? ['Network Configuration', 'System Administration Access']
    : ['Konfigurasi Jaringan', 'Akses Administrasi Sistem'],

  'ci-cd': ['Google Cloud', 'Github Actions'],
}))
type HardSkillKey = keyof typeof hardSkillConstant.value
type HardSkillDetail = Record<HardSkillKey, string>

// STARTOF returned message getter type
interface ExperienceGetterReturn {
  companyName: string
  jobPosition: string
  employmentStatus: string
  timePeriod: string[]
  details: string[]
}

interface EducationGetterReturn {
  institutionName: string
  majorName: string
  period: number[]
  details: string[]
}

interface SkillGetterReturn {
  title: string
  details: string[] | HardSkillDetail
}

type ProjectGetterReturn = Record<Project, ProjectInfo>
// ENDOF

// STARTOF computed message getter to allow typing in rt()
const experiences = computed<ExperienceGetterReturn[]>(
  () => tm('resume.sectionExperience'),
)

const educationHistory = computed<EducationGetterReturn[]>(
  () => tm('resume.sectionEducation'),
)

const skills = computed<SkillGetterReturn[]>(
  () => tm('resume.sectionSkill'),
)

const projects = computed<ProjectGetterReturn>(
  () => tm('resume.sectionProject'),
)
// ENDOF

function formatHardSkill(
  details: Record<HardSkillKey, string>,
): string[] {
  const localeSeparator = {
    id: ' dan ',
    en: ' and ',
  }

  return Object.entries(details).map(([key, value]) => {
    const typedKey = key as HardSkillKey
    const skills = hardSkillConstant.value[typedKey]

    const formattedSkills = skills.length === 2
      ? skills.join(localeSeparator[currentLocale.value])
      : skills.join(', ')

    return `${rt(value)}: ${formattedSkills}`
  })
}

function returnTrailingTitle() {
  const localeTitleDetail = {
    id: '(website ini)',
    en: '(this website)',
  }

  return localeTitleDetail[currentLocale.value]
}
</script>

<template>
  <div
    font="manrope print:sans" print="overflow-x-hidden overflow-y-visible"
    class="bg-background min-h-screen overflow-x-hidden overflow-y-auto"
  >
    <div
      print="m-0 p-0 w-auto h-auto block" p="x-6" flex="~ col" m="x-auto y-16"
      transition="composite duration-500 ease-in-out delay-500" class="gap-4 h-max max-w-3xl"
    >
      <ResumeHeader>
        <p leading="relaxed">
          {{ t('resume.intro') }}
        </p>
      </ResumeHeader>

      <ResumeSection :text="currentLocale === 'en' ? 'Experience' : 'Pengalaman'">
        <ResumeContentArticle
          v-for="experience in experiences" :key="rt(experience.companyName)"
          :subtitle="rt(experience.jobPosition)"
          :time-period="experience.timePeriod.map(time => rt(time))"
          :title="rt(experience.companyName)"
        >
          <ResumeContentList :lists="experience.details.map(detail => rt(detail))" />
        </ResumeContentArticle>
      </ResumeSection>

      <ResumeSection :text="currentLocale === 'en' ? 'Education' : 'Pendidikan'">
        <ResumeContentArticle
          v-for="education in educationHistory" :key="rt(education.institutionName)"
          :subtitle="rt(education.majorName)"
          :time-period="education.period"
          :title="rt(education.institutionName)"
        >
          <ResumeContentList :lists="education.details.map(detail => rt(detail))" />
        </ResumeContentArticle>
      </ResumeSection>

      <ResumeSection :text="currentLocale === 'en' ? 'Skill' : 'Kemahiran'">
        <ResumeContentArticle v-for="skill in skills" :key="rt(skill.title)" :title="rt(skill.title)">
          <ResumeContentList
            v-if="Array.isArray(skill.details)"
            :lists="skill.details.map(detail => rt(detail))"
          />
          <ResumeContentList
            v-else
            :lists="formatHardSkill(skill.details)"
          />
        </ResumeContentArticle>
      </ResumeSection>

      <ResumeSection :text="currentLocale === 'en' ? 'Project' : 'Proyek'">
        <ResumeContentArticle
          v-for="(project, key) in projects"
          :key="key"
          :subtitle="projectConstant[key].liveUrl"
          :time-period="[projectConstant[key].year]"
        >
          <template #title>
            <h2 font="medium" tracking="wide" class="line-clamp-1">
              {{ rt(project.title) }}
              <span v-if="key === 'personal-website'" print="hidden">{{ returnTrailingTitle() }}</span>
            </h2>
          </template>
          <template #default>
            <p>{{ rt(project.description) }}</p>
          </template>
        </ResumeContentArticle>
      </ResumeSection>
    </div>
  </div>
</template>

<style scoped>
@media print {
  @page {
    size: A4 portrait !important;
    margin: 0.4in 0.5in !important;
  }

  h1,
  h2,
  h3,
  h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}
</style>
