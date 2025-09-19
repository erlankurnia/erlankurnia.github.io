<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Radar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

const isDark = ref(false);

const hexToRgba = (hex: string, alpha: number) => {
    const [r, g, b] = hex.replace('#', '').match(/.{2}/g)!.map(x => parseInt(x, 16))
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const chartData = computed(() => ({
    labels: ['Sleeping', 'Dreaming', 'Gaming', 'Workout', 'Practicing', 'Working'],
    datasets: [
        {
            label: 'Lifestyle',
            data: [56, 88, 32, 56, 80, 64],
            backgroundColor: hexToRgba((isDark.value
                ? getComputedStyle(document.documentElement).getPropertyValue('--color-primaryDark').trim()
                : getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()), 0.88),
            borderColor: isDark.value
                ? getComputedStyle(document.documentElement).getPropertyValue('--color-quaternary').trim()
                : getComputedStyle(document.documentElement).getPropertyValue('--color-quaternaryDark').trim(),
            borderWidth: 1,
        }
    ]
}));

const chartOptions = computed(() => ({
    responsive: true,
    plugins: {
        legend: {
            display: false,
            // labels: {
            //     color: isDark.value
            //         ? getComputedStyle(document.documentElement).getPropertyValue('--color-primaryDark').trim()
            //         : getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
            // },
        },
    },
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 100,
            angleLines: {
                color: isDark.value
                    ? getComputedStyle(document.documentElement).getPropertyValue('--color-secondaryDark').trim()
                    : getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim(),
            },
            grid: {
                color: isDark.value
                    ? getComputedStyle(document.documentElement).getPropertyValue('--color-quaternary').trim()
                    : getComputedStyle(document.documentElement).getPropertyValue('--color-quaternaryDark').trim(),
            },
            pointLabels: {
                color: isDark.value
                    ? getComputedStyle(document.documentElement).getPropertyValue('--color-secondaryDark').trim()
                    : getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim(),
            },
            ticks: {
                color: '#0000000',
                // isDark.value
                // ? getComputedStyle(document.documentElement).getPropertyValue('--color-quaternary').trim()
                // : getComputedStyle(document.documentElement).getPropertyValue('--color-quaternaryDark').trim(),
                backdropColor: 'transparent',
            },
        },
    }
}));

onMounted(() => {
    const updateTheme = () => {
        isDark.value = document.documentElement.classList.contains('dark');
        // console.log('isDark: ' + isDark.value);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});
</script>

<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>
